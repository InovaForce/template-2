"use client";
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./home-navbar.scss";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <Navbar expand="lg" className=" home-navbar" collapseOnSelect={true}>
      <Container className="home-navbar-container">
        <Navbar.Brand className="navbar-title" href="#home">Sweet Wedding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto home-nav">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/story">Story</Nav.Link>
            <Nav.Link href="/family">Family</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/wedding">Wedding</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;