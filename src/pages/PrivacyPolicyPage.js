import React from "react";

export default class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Privacy Policy</h1>
        <p>Recipe Hunt values itself in creating a fun and safe community. This privacy policy outlines how we use and protect your data.</p>
        <ul>
        <li>We implemented security measures to prevent the misuse of your personal information and data, and to prevent anuthorized access to your account. </li>
        <li>The only ads that we run are from authorized Recipe Hunt sellers; we do not share your data with third-party marketing services, and do not track your devices for marketing purposes.</li>
        </ul>
        <br/>

        <h4>Types of Data We Use</h4>
        <ul>
          <li><strong>Personal Information.</strong> This includes your name, email address, date of birth, and an optional phone number. This information is needed to create and verify your account. Other personal information such as your name, as well as optional information that you may choose to provide (eg. location, bio) helps build out your profile so that you can engage with our community and be distinguishable on our platform.</li>
          <li><strong>Website activity and device information.</strong> Your activity on the website (eg. page views, access times), and the device(s) that you use, help us with software improvements and bug fixes.</li>
          <li><strong>Dietary and lifestlye preferences. </strong>The information that you provide on your preferred meals helps us filter and customize our website's content to better suit your interests.</li>
          <li><strong>Payment information.</strong> If you choose to buy products from our authorized sellers, credit card and billing information is required. This information is processed to payment processors via security protocols to ensure secure and safe transactions.</li>
          </ul>
          <br/>

        <h4>Data We Store</h4>
        <p>The data that we store is information that helps us deliver the best user experience for you as possible. </p>
          <p>We collect device and usage information to help our developers gain insight on how our users are interacting with our website, which informs current and future technical or design improvements or implementations.</p>
          <p>We also collect information that you provide about your diet and favorite meals, as well as your activity on the website (likes, searches, and ratings) to generate your feed and provide you with recipe and product recommendations that fit your preferences. You can always adjust these preferences in your account settings to change what you would like us to collect.</p>
        </div>
    )
  }
}