import os

# Define the folder structure
project_structure = {
    'routes': [
        'auth.js',
        'dashboard.js',
        'expenses.js',
        'reports.js'
    ],
    'models': [
        'financial_metric_type.js',
        'financial_metric.js',
        'financial_reports.js',
        'metric_insights.js',
        'role.js',
        'user_metrics.js',
        'user.js'
    ]
}

# Create the project structure
for folder, files in project_structure.items():
    # Create the folder if it doesn't exist
    os.makedirs(folder, exist_ok=True)

    # Create each file in the folder
    for file in files:
        file_path = os.path.join(folder, file)
        with open(file_path, 'w') as f:
            f.write(f"// {file} file\n")
            f.write("// Add your code here...\n")

print("Files and folders created successfully.")
