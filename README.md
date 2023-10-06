
# AcademaX - Learning Management System(LMS) 

This Learning Management System (LMS) is a powerful web application built with Next.js13, TypeScript, Tailwind CSS, Prisma, Mux, Stripe, Clerk, and MySQL using Planetscale. It offers a comprehensive set of features for both students and teachers to manage and access courses, track progress, and facilitate online learning.


## Demo

Link Link - https://academax.vercel.app


## Features

### **For Teachers**
- **Teacher Mode:** Switch to teacher mode to create and manage courses.

- **Create New Courses:** Easily create new courses with titles, descriptions, and thumbnails.

- **Create New Chapters:** Add chapters to your courses, complete with rich text descriptions and video content.

- **Reorder Chapters with Drag n' Drop:** Intuitively rearrange chapter positions with a simple drag-and-drop interface.

- **Upload Thumbnails, Attachments, and Videos:** Use UploadThing for easy multimedia uploads, including video content.

- **Video Processing with Mux:** Leverage Mux for video processing and HLS video playback.

- **Rich Text Editor:** Create engaging chapter descriptions using a rich text editor.

### **For Students**
- **Browse & Filter Courses:** Easily search for courses and apply filters to find the right ones for you.

- **Purchase Courses using Stripe:** Seamlessly buy courses with Stripe integration for secure payments.

- **Mark Chapters as Completed:** Keep track of your progress by marking completed chapters within each course.

- **Progress Calculation:** Get real-time progress updates on each course to see how much you've completed.

- **Student Dashboard:** Access your personalized dashboard with a list of enrolled courses and progress indicators.



### Cloning the repository

```bash
https://github.com/adityayaduvanshi/AcademaX-full-stack-LMS.git
```

### Install packages

```
npm i
```
### Setup .env file  

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=
```
### Setup Prisma
Add MySQL Database (I used PlanetScale)
```
npx prisma generate
npx prisma db push
```

### Start the app
```
npm run dev
```



