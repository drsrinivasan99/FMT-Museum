# Forensic Teaching Museum website

A static, GitHub Pages-ready website for a Department of Forensic Medicine & Toxicology museum.

## Publish with GitHub Pages

1. Create a GitHub repository and upload `index.html`, `styles.css`, and `script.js`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Save. GitHub will provide the public website address in a few minutes.

## Personalise before publishing

Replace the bracketed location text, email address, and phone number in `index.html`.

## Add your museum exhibits

You do **not** need to edit the website layout. All weapons, poisons, and wet specimens are listed in the easy-edit file `museum-data.js`.

1. Open `museum-data.js` in a text editor (GitHub has an online editor, so you can do this without installing software).
2. Find the relevant heading: `weapons`, `poisons`, or `specimens`.
3. Copy one existing `{name: ... }` line, paste it below, and change the name, short summary, description, and teaching notes.
4. Add your photograph as described below.

The homepage collection cards open the correct catalogue. Each catalogue item can then be selected to display that exhibit's photograph and full description.

## Add photographs

Create a folder named `images` beside `index.html`, and upload your photographs there. Then, in `museum-data.js`, change `image:""` to the image filename, for example:

```css
image: "images/sharp-force-set.jpg"
```

Use only images cleared by the department and suitable for public academic viewing. Consider a password-protected teaching platform for sensitive or graphic material.
