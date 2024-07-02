# Bookify - Library Management Web App

<p>Manage library as a librarian, and borrow, return, and read books as a user.</p>
<p>Website Category: Library Management Web</p>

# Librarian Account

```
email: dev.shejanmahamud@gmail.com
password: Ihateu123@
```

# Key Features

> - User Authentication
> - Social Login
> - Email Password Login & Register
> - Private Route
> - LogOut
> - Only librarian can add and update books.
> - Users cannot update or add books.
> - Only librarian can manage books.
> - Users can borrow a book.
> - Users can return a book.
> - Users cannot borrow more than 3 books.
> - Category-based books.
> - Writers-based books.
> - Featured book of the week.
> - Available books filtering.
> - Share review on each book.
> - Added search on banner (login required).

# NPM Packages Used

> - React Tooltip
> - SwiperJS
> - Ant Design
> - React Hot Toast
> - react-icons
> - axios

# Technologies Used

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TAILWIND CSS](https://img.shields.io/badge/TAILWINDCSS-37B6F1?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![React](https://img.shields.io/badge/REACT-37B6F1?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/REACT%20ROUTER-red?style=for-the-badge&logo=react-router&logoColor=white)
![Firebase](https://img.shields.io/badge/FIREBASE-yellow?style=for-the-badge&logo=firebase&logoColor=white)
![expressJS](https://img.shields.io/badge/EXPRESS-3C873A?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MONGODB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/NODEJS-3C873A?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

# Problem Faced and Solution

One of the challenges faced during development was displaying books based on their categories and authors. To solve this, I leveraged MongoDB's aggregation pipeline:

1. **Lookup**: Used `$lookup` to join the books collection with the categories and authors collections to get the corresponding category and author details.
2. **Match**: Applied a `$match` stage to filter out books based on selected categories and authors.
3. **Projection**: Used `$project` to specify the fields to be included in the final output, ensuring only relevant information is displayed.

This approach allowed efficient querying and dynamic filtering of books based on user preferences, enhancing the user experience in browsing and discovering books.

# Live Link

[Netlify Link](https://bookify-library.netlify.app/)

# Run This Project

```
https://github.com/ShejanMahamud/NestQuest-Client.git
```
```
npm instal
```
Dev Mode:
```
npm run dev
```
Build Mode:
```
npm run build
```

# Thanks For Reading & Visiting!
