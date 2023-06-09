import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./content.css";
import RequestInviteButton from "./RequestInviteButton";

const MainContent = () => {
  return (
    <div className="d-flex flex-column">
      <div className="content-top">
        <div className="info">
          <h1>Next generation digital banking</h1>
          <p className="text-gray">
            Taking your financial life online. Your easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div>
            <RequestInviteButton />
          </div>
        </div>
        <div className="mockups">
          <img
            src={process.env.PUBLIC_URL + "/images/image-mockups.png"}
            className="img2"
          />
        </div>
      </div>
      <div className="content-box content-mid bg-light-gray-blue">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2>Why choose Easybank?</h2>
          <p className="text-gray m-0">
            We leverage Open Banking to turn your bank account into your
            financial hub.Contorl your finances like never before.
          </p>
          <br />
        </div>
        <CardGroup className="feature-box">
          <Card>
            <Card.Body className="bg-light-gray-blue">
              <img
                src={process.env.PUBLIC_URL + "/images/icon-online.svg"}
                alt="Online Banking"
              />
              <br />
              <br />
              <Card.Title>Online Banking</Card.Title>
              <Card.Text>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="bg-light-gray-blue">
              <img
                src={process.env.PUBLIC_URL + "/images/icon-budgeting.svg"}
                alt="Simple Budgeting"
              />
              <br />
              <br />
              <Card.Title>Simple Budgeting</Card.Title>
              <Card.Text>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="bg-light-gray-blue">
              <img
                src={process.env.PUBLIC_URL + "/images/icon-onboarding.svg"}
                alt="Fast Onboarding"
              />
              <br />
              <br />
              <Card.Title>Fast Onboarding</Card.Title>
              <Card.Text>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="bg-light-gray-blue">
              <img
                src={process.env.PUBLIC_URL + "/images/icon-api.svg"}
                alt="Open API"
              />
              <br />
              <br />
              <Card.Title>Open API</Card.Title>
              <Card.Text>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div className="content-box bg-very-light-gray">
        <h3 className="mb-5">Latest Articles</h3>
        <CardGroup id="articles" className="article-box">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/image-currency.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title>
                Receive money in any currency with no fees
              </Card.Title>
              <Card.Text>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/image-restaurant.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title>
                Treat yourself without worrying about money
              </Card.Title>
              <Card.Text>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/image-plane.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title>Take your Easybank card wherever you go</Card.Title>
              <Card.Text>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/image-confetti.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title>
                Our invite-only Beta accounts are now live!
              </Card.Title>
              <Card.Text>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default MainContent;
