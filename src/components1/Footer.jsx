// Footer
function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
