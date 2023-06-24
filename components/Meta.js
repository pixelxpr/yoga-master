import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "shape up with ana",
  keywords:
    "yoga, workout, shape-up, shape up, exercise, strengthening, Calorie burners, Morning flow yoga, Morning yoga, Strength training, Vinyasa, Diet plans",
  description:
    "Workout has the power to change your life. Every individual is seeking to achieve different goals. My aim is to personalise your learning to maximise the physical and mental benefits that you are looking to achieve.",
};

export default Meta;
