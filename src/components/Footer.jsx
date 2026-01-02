import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-auto">
      <Container>
        <p className="mb-0 text-muted">
          © {new Date().getFullYear()} Ganesh Diary. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
