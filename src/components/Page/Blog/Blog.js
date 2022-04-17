import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div className="blog-container">
      <article>
        <h3>1 . Difference between authorization and authentication</h3>
        <div>
          <h4>Authentication</h4>
          <p>
            Authentication is about validating your credentials like User
            Name/User ID and password to verify your identity. The system
            determines whether you are what you say you are using your
            credentials. In public and private networks, the system
            authenticates the user identity via login passwords. Authentication
            is usually done by a username and password, and sometimes in
            conjunction with factors of authentication, which refers to the
            various ways to be authenticated.
          </p>
        </div>
        <div>
          <br />
          <h4>Authorization</h4>
          <p>
            Authorization, on the other hand, occurs after your identity is
            successfully authenticated by the system, which ultimately gives you
            full permission to access the resources such as information, files,
            databases, funds, locations, almost anything. In simple terms,
            authorization determines your ability to access the system and up to
            what extent. Once your identity is verified by the system after
            successful authentication, you are then authorized to access the
            resources of the system.
          </p>
        </div>
      </article>
      <h3>
        2 . What other services does firebase provide other than authentication
      </h3>
      <p>
        2.1 Firebase manages all data real-time in the database. So, the
        exchange of data to and fro from the database is easy and quick. Hence,
        if you are looking to develop mobile apps such as live streaming, chat
        messaging, etc., you can use Firebase.
      </p>
      <p>
        2.2 Firebase allow syncing the real-time data across all the devices-
        Android, iOS, and the web without refreshing the screen
      </p>
      <p>
        2.3 Firebase offers integration to Google Ads, AdMob, DoubleClick, Play
        Store, Data Studio, BigQuery, and Slack, to make your app development
        with efficient and accurate management and maintenance
      </p>
      <p>
        2.4 Everything from databases, analytics to crashing reports are
        included in Firebase. So, the app development teams can stay focused on
        improving the user experience
      </p>
      <p>2.5 Create Application without backend server</p>
      <article></article>
    </div>
  );
};

export default Blog;