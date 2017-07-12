install_deps:
	sudo apt install ruby && \
	sudo gem install sass

verify_installation:
	gem -v && sass -v

sass_watch:
	sass --watch styles.scss