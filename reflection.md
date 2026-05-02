## Reflection

This project is a website for a jewelry store named MEDUSA. It includes a homepage that contains several cards for each piece of jewelry. Each card navigates to its own detail page. Additionally, there are filtering features that allow users to filter the cards by category and availability.

This project uses a static HTML approach with an existing products.json file, combined with Astro and Tailwind CSS. Since there are several reusable elements in this project, such as cards and detail pages, using Astro components helps maintain consistency across the UI. For example, for the detail pages, I created only one page and combined it with all the product information, whereas other approaches, such as using plain HTML/CSS or SCSS, would require multiple separate pages.

On the other hand, there are some limitations I found during the project. First, I needed to ensure that I ran npm run dev; otherwise, the project would not compile. Additionally, linking information between pages was quite complicated, such as managing imports and data links. I sometimes made mistakes in this part. However, if I were more careful, I could use it more efficiently.

## Deployment
https://medusa-astro.netlify.app