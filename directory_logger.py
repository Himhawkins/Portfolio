import os
from pathlib import Path

# Configuration: Folders to ignore
EXCLUDED_DIRS = {'.git', 'node_modules', '__pycache__', '.venv', 'venv', 'dist', 'build','_site','vendor'}

# Configuration: Files to read content from
TEXT_EXTENSIONS = {'.py', '.cpp', '.h', '.hpp', '.html', '.css', '.js', '.txt', '.md'}

# Configuration: Files to just mention
MEDIA_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.mp4', '.mkv', '.mov', '.pdf', '.webm'}

def generate_tree(dir_path, prefix=""):
    """Recursively generates a visual tree structure, skipping excluded directories."""
    tree_str = ""
    # Filter out excluded directories and files
    paths = sorted([
        p for p in dir_path.iterdir() 
        if p.name not in EXCLUDED_DIRS
    ])
    
    for i, path in enumerate(paths):
        is_last = (i == len(paths) - 1)
        connector = "└── " if is_last else "├── "
        tree_str += f"{prefix}{connector}{path.name}\n"
        
        if path.is_dir():
            extension = "    " if is_last else "│   "
            tree_str += generate_tree(path, prefix + extension)
    return tree_str

def create_project_log(output_file="project_log.txt"):
    root = Path(".")
    
    with open(output_file, "w", encoding="utf-8") as log:
        # 1. Write Directory Structure
        log.write("=== DIRECTORY STRUCTURE ===\n")
        log.write(f"{root.resolve().name}/\n")
        log.write(generate_tree(root))
        log.write("\n" + "="*30 + "\n\n")

        # 2. Iterate through files for content
        # We use rglob but filter out any paths that contain excluded directories
        for path in root.rglob("*"):
            # Skip if it's a directory, the output file itself, or inside an excluded folder
            if path.is_dir() or path.name == output_file:
                continue
            
            # Check if any part of the file's path is in the excluded list
            if any(part in EXCLUDED_DIRS for part in path.parts):
                continue

            suffix = path.suffix.lower()
            log.write(f"FILE: {path}\n")
            log.write("-" * (len(str(path)) + 6) + "\n")

            if suffix in TEXT_EXTENSIONS:
                try:
                    content = path.read_text(encoding="utf-8")
                    log.write(content)
                except Exception as e:
                    log.write(f"[Error reading file: {e}]")
            elif suffix in MEDIA_EXTENSIONS:
                log.write(f"[Binary/Media File: {suffix[1:].upper()} content skipped]")
            else:
                log.write("[Skipped: Unsupported file type]")
            
            log.write("\n\n" + "="*30 + "\n\n")

    print(f"Log successfully created: {output_file}")

if __name__ == "__main__":
    create_project_log()