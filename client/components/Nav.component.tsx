import { Logo } from "../SVGS/SVGS";
import ActiveLink from "../components/ActiveLink";
import Link from "next/link";
import { useState, useEffect } from "react";
import MediaAsset from "../components/MediaAsset.component";
import $ from "jquery";
import { Nav, Navbar } from "react-bootstrap";

export default function NavMain() {
  const [isTop, setScroll] = useState(true);
  const [mobileToggle, handleMobileToggle] = useState(false);
  const [navHeight, setHeight] = useState(Number);

  useEffect(() => {
    $(document).ready(function () {
      setHeight($(".hkba-nav").outerHeight());
    });

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY < 175);
    });
  });

  return (
    // <div style={{ marginBottom: 120 + "px" }}>
    <div className="mb-nav">
      <Navbar className="hkba-nav flex-wrap nav-main" bg="light" expand="xl">
        <Navbar.Brand href="#home">
          <Link href="/">
            <a className="navbar-brand">
              <MediaAsset slug="logo2" classes="h-8"></MediaAsset>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <ActiveLink href="/" icon="i-home">
              <span>Головна</span>
            </ActiveLink>

            <ActiveLink href="/blog" icon="i-target">
              <span>Події</span>{" "}
            </ActiveLink>

            <ActiveLink href="/history" icon="i-eye">
              <span>Історія</span>
            </ActiveLink>

            <ActiveLink href="/calendar" icon="i-maze">
              <span>Календар</span>
            </ActiveLink>

            <ActiveLink href="/gallery" icon="i-facture">
              <span>Фотогалерея</span>
            </ActiveLink>

            <ActiveLink href="/additions" icon="i-secure">
              <span>Абітурієнтам</span>
            </ActiveLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
