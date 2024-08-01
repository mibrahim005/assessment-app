CREATE TABLE IF NOT EXISTS portfolio_items (
  id SERIAL PRIMARY KEY,
  image TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  type TEXT NOT NULL
);

INSERT INTO portfolio_items (image, title, description, link, type) VALUES
('https://images.unsplash.com/photo-1618588590706-bac3c25b3d41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'XXXLUTZ DAS RADIO -', 'Strategy // social media', '#', 'banner'),
('https://images.unsplash.com/photo-1618588590706-bac3c25b3d41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Strategy // social media', 'baumgartner & kapsreiter', '#', 'scroll_up_slider'),
('https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Strategy // social media', 'baumgartner & kapsreiter', '#', 'scroll_up_slider'),
('https://images.unsplash.com/photo-1546561421-7de17ac61242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Strategy // social media', 'baumgartner & kapsreiter', '#', 'scroll_up_slider'),
('https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Strategy // social media', 'baumgartner & kapsreiter', '#', 'scroll_up_slider'),
('https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Strategy // social media', 'baumgartner & kapsreiter', '#', 'scroll_down_slider'),
('https://images.unsplash.com/photo-1546561421-7de17ac61242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Strategy // social media', 'baumgartner & kapsreiter', '#', 'scroll_down_slider'),
('https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Strategy // social media', 'baumgartner & kapsreiter', '#', 'scroll_down_slider'),
('https://images.unsplash.com/photo-1618588590706-bac3c25b3d41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Strategy // social media', 'baumgartner & kapsreiter', '#', 'scroll_down_slider');
