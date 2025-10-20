import React, { useState } from 'react';

// Hero Banner Component
const HeroBanner: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <img
        src="/Charge-Cards/Banner.jpg"
        alt="BYD & Shell"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: '#fff',
        width: '100%',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 600,
          margin: 0,
          fontFamily: 'Montserrat, Arial, sans-serif'
        }}>
          BYD x Shell EV Charging Cards
        </h2>
      </div>
    </div>
  );
};

// Image Text Card Component
interface ImageTextCardProps {
  title: string;
  items: string[];
  imageSrc: string;
  reverse?: boolean;
}

const ImageTextCard: React.FC<ImageTextCardProps> = ({ title, items, imageSrc, reverse = false }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      gap: '60px',
      padding: '80px 96px',
      maxWidth: '1600px',
      margin: '0 auto',
      alignItems: 'center'
    }}>
      <div style={{ flex: 1 }}>
        <img src={imageSrc} alt={title} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ flex: 1 }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: '24px',
          color: '#252728',
          fontFamily: 'Montserrat, Arial, sans-serif'
        }}>
          {title}
        </h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {items.map((item, index) => (
            <li key={index} style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#252728',
              marginBottom: '16px',
              paddingLeft: '24px',
              position: 'relative',
              fontFamily: 'Montserrat, Arial, sans-serif'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '8px',
                width: '6px',
                height: '6px',
                backgroundColor: '#252728',
                borderRadius: '50%'
              }}></span>
              <span dangerouslySetInnerHTML={{ __html: item }}></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Video Section Component
const VideoSection: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      padding: '80px 0',
      backgroundColor: '#f7f7f7'
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
      }}>
        <video
          controls
          muted
          autoPlay
          loop
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0px'
          }}
        >
          <source src="Charge-Cards/BYD_Shell_video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};


// Main App Component
const BYDShellPage: React.FC = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <HeroBanner />
      
      <ImageTextCard
        title="Experience More with Your BYD"
        items={[
          'BYD and Shell Recharge are advancing together and driving the future of electric mobility.',
          'Our enhanced offering will unlock a streamlined experience and reduce the cost of rapid and ultra-rapid charging on Shell Recharge public DC network.',
          'A seamless driving and charging experience with BYD and Shell Recharge. Get ready to embark on this exciting journey with us. Shell Recharge app is mirrored onto the BYD infotainment system by Andriod Auto or Apple CarPlay. You can easily navigate to the nearest fastest and available charge point or a charge point that is conveniently located on your journey.'
        ]}
        imageSrc="/Charge-Cards/1.png"
        reverse={true}
      />

      <ImageTextCard
        title="Exclusive benefits for BYD customers"
        items={[
          'No subscription fees',
          'Discount of £0.24 per kWh when using the Shell Recharge owned and operated fast charging network',
          'Access 850 000+ charging points across Europe',
          'Saving on European rapid and ultra-rapid charging too, in these countries, discount per kWh:<br>- France 0.15€<br>- Netherlands 0.20€<br>- Belgium 0.15€<br>- Germany 0.15€<br>- Austria 0.15€<br>- Switzerland 0.15€<br><br><sup>*Discounts will automatically be applied to the current kWh price, when using the BYD X Shell Recharge charge card</sup>'
        ]}
        imageSrc="/Charge-Cards/2.jpg"
      />

      <ImageTextCard
        title="Here's how the promotion works"
        items={[
          'Please register for the BYD App and follow the BYD x Shell Recharge link to register for your charge card.',
          'Your discount will be automatically applied when using the Shell Recharge owned and operated DC fast charging network.',
          'Start charging and save smart. You will receive a digital overview of your charging sessions and your invoice at the end of each month.',
          'Read the Terms and Conditions: <a href="https://www.shell.co.uk/terms-and-conditions/terms-and-conditions-shell-recharge-x-byd-promotion.html" style="text-decoration: underline; color: #252728;">HERE</a>'
        ]}
        imageSrc="/Charge-Cards/3.webp"
        reverse={true}
      />

      <VideoSection />
      

    </div>
  );
};

export default BYDShellPage;