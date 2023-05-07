import os

def print_directory_tree(path, exclude_folders=None, level=0):
    if exclude_folders is None:
        exclude_folders = []

    files = os.listdir(path)
    for file in files:
        if file not in exclude_folders:
            print("  " * level + "├─ " + file)
            if os.path.isdir(os.path.join(path, file)):
                print_directory_tree(os.path.join(path, file), exclude_folders, level + 1)

print_directory_tree(".", exclude_folders=["node_modules", ".git"])