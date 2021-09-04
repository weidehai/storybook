new-story:
	node build/bin/new-story.js $(filter-out $@,$(MAKECMDGOALS))

delete:
	node build/bin/delete.js $(filter-out $@,$(MAKECMDGOALS))