var Ads = React.createClass({
  render: function() {
    return (
      <aside className="aside ads">
        <h4 className="upcase">Sponsored</h4>

        <article className="ad">
          <a href="http://www.ryandgoldenberg.com">
            <img src="https://github.com/ryandgoldenberg1/Superbook/raw/master/public/personal-site.png" />
            <h5>Ryan Goldenberg</h5>
            <p>Creator of Superbook</p>
          </a>
        </article>

        <article className="ad">
          <a href="http://blog.ryandgoldenberg.com">
            <img src="https://github.com/ryandgoldenberg1/Superbook/raw/master/public/blog.png" />
            <h5>Blog</h5>
            <p>See our blog!</p>
          </a>
        </article>

        <article className="ad">
          <a href="http://www.ryandgoldenberg.com/AsteroidsJS">
            <img src="https://github.com/ryandgoldenberg1/Superbook/raw/master/public/spacewars-screenshot.png" />
            <h5>Spacewars</h5>
            <p>2D HTML5 Canvas Shooter</p>
          </a>
        </article>
      </aside>
    );
  }
});
