const Navigation = () => {
  return (
    <div>
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a
              class="nav-link active nav-ul-li-a-color"
              aria-current="page"
              href="#toHome"
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-ul-li-a-color" href="#toAbout">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-ul-li-a-color" href="#toMyProjects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-ul-li-a-color" href="#toContact">
              Contact
            </a>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
