# 💻Live-Vision🔎

**Live-Vision** is an advanced web application designed for real-time object detection, tracking, and classification Live-Vision provides robust capabilities for monitoring environments through video streams, recording footage, and triggering sound alerts based on detected objects.

## Features

- **Real-Time Object Detection**: Detect objects in real-time using the CoCo SSD model with MobileNetV2 from TensorFlow.js.
- **Object Tracking**: Track detected objects dynamically as they move across the camera’s field of view.
- **Object Classification**: Classify detected objects with high accuracy using pre-trained models.
- **Video Recording**: Record live video streams and save them for later review.
- **Sound Alerts**: Trigger sound alerts based on specific object detections for real-time notifications.

## Technologies Used

- **Next.js**: A React framework used for building the front end and server-side rendering.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **ShadCN UI**: A modern UI component library for building responsive and interactive interfaces.
- **MySQL**: A relational database management system used for storing user data, recorded videos, and detected objects.
- **NextAuth**: A complete open-source authentication solution for Next.js applications, used here for managing user sessions.
- **TensorFlow.js (CoCo SSD with MobileNetV2)**: A machine learning model used for object detection and classification.

## Installation

To get started with Live-Vision, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/live-vision.git
    cd live-vision
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up the environment variables:**

    Create a `.env.local` file in the root of your project and add the following variables:

    ```plaintext
    DATABASE_URL=mysql://username:password@localhost:3306/livevision
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_secret_key
    ```

4. **Run database migrations:**
    ```bash
    npx prisma migrate dev
    ```

5. **Start the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Login/Register**: Use the authentication system provided by NextAuth to create an account and log in.
2. **Start Object Detection**: Access the object detection interface, where you can start real-time detection and tracking.
3. **Review Recordings**: View, manage, and download recorded videos from your sessions.
4. **Configure Alerts**: Set up sound alerts for specific object detections to be notified in real time.

## Contributing

If you want to contribute to Live-Vision, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://shadcn.dev/)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [NextAuth](https://next-auth.js.org/)
- [CoCo SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)

---
Feel free to modify this project as needed!😊
Happy coding!😊
