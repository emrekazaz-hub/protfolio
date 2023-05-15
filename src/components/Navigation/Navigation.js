const Navigation = () => {
  return (
    <div>
      <nav style={{ paddingBottom: "2%" , paddingTop : "1%"}}>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a
              class="nav-link active nav-ul-li-a-color"
              aria-current="page"
              href="#"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-ul-li-a-color" href="#toEducation">
              Education
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
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
