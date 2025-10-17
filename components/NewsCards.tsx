export default function NewsCards() {
  const newsItems = [
    {
      id: 1,
      title: "Some news title goes here and should stay to two to three lines maximum",
      image: "/placeholder-news.jpg"
    },
    {
      id: 2,
      title: "Some news title goes here and should stay to two to three lines maximum",
      image: "/placeholder-news.jpg"
    },
    {
      id: 3,
      title: "Some news title goes here and should stay to two to three lines maximum",
      image: "/placeholder-news.jpg"
    }
  ];

  return (
    <section className="news-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="news-section-title">Lorem Ipsum</h3>
          <a href="#" className="view-all-news">View all News →</a>
        </div>
        <div className="row g-4">
          {newsItems.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="news-card">
                <div className="news-image-placeholder">
                  <div className="placeholder-content">Image placeholder</div>
                </div>
                <p className="news-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
