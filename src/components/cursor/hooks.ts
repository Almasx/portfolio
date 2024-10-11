import { useSpring, useTransform } from "framer-motion";
import { useState, useCallback, useEffect, useMemo } from "react";
import { SPIRAL_SPREAD } from "./const";
import { tagSpringConfig } from "./animations";

interface TagInfo {
  id: string;
  text: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return mousePosition;
};

export const useTagExtraction = () => {
  const [tags, setTags] = useState<TagInfo[]>([]);

  const updateTags = useCallback((e: MouseEvent) => {
    const interactable = (e.target as Element).closest(".interactable");
    const getTags = (id?: string) => (id ? id.split("#").slice(1) : []);

    const tags = getTags(interactable?.id).map((tag, index) => ({
      id: `${tag}-${index}`,
      text: tag,
    }));

    setTags(tags);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateTags);
    return () => window.removeEventListener("mousemove", updateTags);
  }, [updateTags]);

  return tags;
};

interface TagPositionArgs {
  mousePosition: MousePosition;
  index: number;
  total: number;
  tagWidth: number;
}

export const useTagPosition = ({
  mousePosition,
  index,
  total,
  tagWidth,
}: TagPositionArgs) => {
  const springConfig = useMemo(
    () => ({ ...tagSpringConfig, mass: 0.5 + index * 0.2 }),
    [index]
  );

  const position = useMemo(() => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = SPIRAL_SPREAD + tagWidth / 2 + index * 10;

    return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
  }, [index, total, tagWidth]);

  const springX = useSpring(mousePosition.x, springConfig);
  const springY = useSpring(mousePosition.y, springConfig);

  const smoothX = useTransform(springX, (x) => x + position.x);
  const smoothY = useTransform(springY, (y) => y + position.y);

  useEffect(() => {
    springX.set(mousePosition.x);
    springY.set(mousePosition.y);
  }, [mousePosition, springX, springY]);

  return { smoothX, smoothY };
};
