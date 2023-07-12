## New components folder

The purpose of the new components folder is to house the new layouts.
This folder serves as a centralized location for tracking edited files
and identifying those that require updating.

## Folder Structure

The new components folder is organized in a hierarchical structure that
facilitates efficient file management. Within this folder, each layout
is stored as an individual file.

## Reference Update in HTML file

To ensure proper referencing of files within the HTML files, it is
necessary to update the file paths whenever a layout file is modified
and placed within the new components folder. The following section
outlines the process of changing the file references in the HTML files
to /components/<file_name>.

1. Identify the modified layout file:

   - When a layout file is edited and saved in the new components
     folder, take note of the file name.

2. Locate HTML files referencing the modified layout file:

   - Search through the HTML files to find any instances where the
     modified layout file is referenced.

3. Update the file reference:

   - Replace the existing file path of the layout file with the new
     path /components/<file_name>. Ensure that the modified file name
     is accurately reflected in the updated reference.

4. Repeat for all affected HTML files:

   - If there are multiple HTML files referencing the modified layout
     file, repeat the reference update process for each file.

5. Verify the changes:

   - After updating the file references in the HTML files, verify that
     the modified layout file is correctly referenced
     as /components/<file_name>.

6. Test the updated HTML files:

   - Perform thorough testing to ensure that the HTML files function as
     intended with the updated file references. Check that all components
     are displayed correctly and that there are no broken links or missing
     resources.
