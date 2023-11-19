# Function to replace all translation keys in the settings_schema.json with their corresponding readable strings
def replace_translation_keys(data, en_default_data):
    def replace_keys_recursive(element):
        if isinstance(element, dict):
            for key, value in list(element.items()):
                if isinstance(value, str) and value.startswith("t:"):
                    # Find the corresponding value and replace it
                    corresponding_value = find_corresponding_value(en_default_data, value)
                    if corresponding_value:
                        element[key] = corresponding_value
                elif isinstance(value, (dict, list)):
                    replace_keys_recursive(value)
        elif isinstance(element, list):
            for item in element:
                replace_keys_recursive(item)

    replace_keys_recursive(data)
    return data

# Replacing translation keys in settings_schema.json
updated_settings_schema_data = replace_translation_keys(settings_schema_data, en_default_schema_data)

# Save the updated data back to a JSON file
updated_settings_schema_path = '/mnt/data/updated_settings_schema.json'
with open(updated_settings_schema_path, 'w') as file:
    json.dump(updated_settings_schema_data, file, indent=4)

updated_settings_schema_path
