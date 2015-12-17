var Ads = React.createClass({
  render: function() {
    return (
      <aside className="aside ads">
        <h4 className="upcase">Sponsored</h4>

        <article className="ad">
          <img src="http://www.ryandgoldenberg.com/assets/img/black-white-background.jpg" />
          <h5><a href="http://www.ryandgoldenberg.com">Ryan Goldenberg</a></h5>
        </article>

        <article className="ad">
          <img src="https://github.com/ryandgoldenberg1/AsteroidsJS/raw/master/images/screenshot.png" />
          <h5><a href="http://www.ryandgoldenberg.com/AsteroidsJS">Spacewars</a></h5>
        </article>

        <article className="ad">
          <img src="public/blog.png" />
          <h5><a href="http://blog.ryandgoldenberg.com">Blog</a></h5>
        </article>
      </aside>
    );
  }
});
