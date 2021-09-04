new-story:
	node build/bin/new-story.js $(filter-out $@,$(MAKECMDGOALS))
