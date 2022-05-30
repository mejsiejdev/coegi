# Coegi

This is the repository of **Coegi**'s website.

The site was created using:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [DatoCMS](https://tailwindcss.com/) as the data source
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vercel](https://vercel.com/) for deployment

## Steps required to run it locally

### Step 1. Clone the repository

### Step 2. Create the project on DatoCMS

Create a **new project** from the dashboard. Select a **Blank Project**.

From the project setting page, create a new **Model**.

- The name should be `Artist`.
- The single instance should be set to true.

Next, add these fields (you don't have to modify the settings):

- `Name` - **Text** field (**Single-line String**)
- `Description` - **Text** field (**Multiple-paragraph text**)
- `Picture` - **Media** field (**Single asset**)
- `Socials` - **JSON** field, set it's default value to:

  ```json
  {
    "instagram": "",
    "twitter": "",
    "soundcloud": "",
    "spotify": "",
    "youtube": ""
  }
  ```

After that, from the project setting page, create a new **Model**:

- The name should be `Song`.

Next, add these fields:

- `Title` - **Text** field (**Single-line String**)
- `Slug` - **SEO** field (**Slug**), and from the "Validations" tab under "Reference field" select **Title**.
- `Author` - **Text** field (**Single-line String**) _(Optional)_
- `Description` - **Text** field (**Multiple-paragraph Text**) _(Optional)_
- `Cover` - **Media** field (**Single asset**)
- `Links` - **JSON** field, set it's default value to:

  ```json
  {
    "soundcloud": "",
    "spotify": "",
    "tidal": "",
    "youtube": "",
    "apple": "",
    "download": {
      "radio": "",
      "extended": ""
    }
  }
  ```

- `Uploaded At` - **Date and time** field (**Date**)
- `SEO` - **SEO** field (**SEO meta tags**)

From the **Content** menu at the top, select **Artist** and create a new record.

Next, select **Song** and create some records.

- I recommend creating at least **4 Song records**.
- You can write markdown for the **Description** field.

### Step 3. Set up environment variables

Go to the **Settings** menu at the top and click **API tokens**.

Then click **Read-only API token** and copy the token.

Next, copy the `.env.example` file in this directory to `.env`:

```bash
cp .env.example .env
```

Then set each variable on `.env`:

- `NEXT_DATOCMS_API_TOKEN` should be the API token you just copied.

Your `.env.local` file should look like this:

```bash
NEXT_DATOCMS_API_TOKEN=...
```

### Step 4. Run Next.js in development mode

```bash
npm install
npm run dev
```

The website should be up and running on [http://localhost:3000](http://localhost:3000).
