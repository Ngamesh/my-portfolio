#!/usr/bin/env python3
from __future__ import annotations

import os
from pathlib import Path
from typing import Iterable
from PIL import Image, features

PROJECT_ROOT = Path(__file__).resolve().parent.parent
ASSETS_DIR = PROJECT_ROOT / "public" / "assets"

TASKS = [
    {"input": "avatar.jpg", "base": "avatar", "widths": [192, 384]},
    {"input": "simple.png", "base": "simple", "widths": [320, 640, 960]},
    {"input": "luxury.png", "base": "luxury", "widths": [320, 640, 960]},
    {"input": "food.png", "base": "food", "widths": [320, 640, 960]},
    {"input": "nike.png", "base": "nike", "widths": [320, 640, 960, 1280]},
    {"input": "cardio.png", "base": "cardio", "widths": [240, 480, 800]},
    {"input": "fga.png", "base": "fga", "widths": [240, 480, 800]},
    {"input": "muscle.png", "base": "muscle", "widths": [240, 480, 800]},
    {"input": "profile.png", "base": "profile", "widths": [240, 480, 800]},
    {"input": "spark.png", "base": "spark", "widths": [240, 480, 800]},
    {"input": "chat.png", "base": "chat", "widths": [240, 480, 800]},
    {"input": "price.png", "base": "price", "widths": [240, 480, 800]},
    {"input": "location.png", "base": "location", "widths": [240, 480, 800]},
]

FORMATS = [
    {"ext": "webp", "quality": 72},
]

if features.check("avif"):
    FORMATS.append({"ext": "avif", "quality": 50})


def ensure_dir(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def resized(img: Image.Image, width: int) -> Image.Image:
    if img.width <= width:
        return img.copy()
    height = int((width / img.width) * img.height)
    return img.resize((width, height), Image.Resampling.LANCZOS)


def save_variant(img: Image.Image, out_path: Path, fmt: dict) -> None:
    ensure_dir(out_path)
    params = {"quality": fmt["quality"]}
    if fmt["ext"] == "avif":
        params["speed"] = 6
    img.save(out_path, format=fmt["ext"].upper(), **params)


def process_task(task: dict) -> None:
    input_path = ASSETS_DIR / task["input"]
    if not input_path.exists():
        print(f"Skipping missing file: {task['input']}")
        return

    with Image.open(input_path) as img:
        mode = "RGBA" if img.mode in ("RGBA", "LA", "P") else "RGB"
        base_img = img.convert(mode)

        for width in task["widths"]:
            output_img = resized(base_img, width)
            for fmt in FORMATS:
                out_name = f"{task['base']}-{width}.{fmt['ext']}"
                out_path = ASSETS_DIR / out_name
                save_variant(output_img, out_path, fmt)


def main() -> None:
    print(f"Optimizing images in {ASSETS_DIR}")
    for task in TASKS:
        process_task(task)
    print("Done. Generated responsive WEBP/AVIF variants.")


if __name__ == "__main__":
    main()
