const Sidebar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn fixed inset-y-44 right-36 font-accent btn-ghost btn-primary drawer-button"
        >
          Table of Contents
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-1/5 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a>2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
