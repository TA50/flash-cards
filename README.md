# flash-cards
Flash cards application to make learning by repetition easier.

# Project Architecure. 
I am using Yarn workspaces here to split the solutioin into different projcets
## @flash-cards/models

Contains only database or api models (Dtos)

## @flash-cards/repositories 
Contains only abstractions of Sources of data (Api, firebase, ….). Also may contain other DTOS. 
### deps:
- @flash-cards/models

		
## @flash-cards/firebase

Contains implementation of the repositories abstractions using firebase.
### deps:

- @flash-cards/models
- @flash-cards/repositories

## @flash-cards/services
contains the services consumed by the application, to decouple the application from the implementations of the abstractions.
### deps	
- @flash-cards/repositories
- @flash-cards/firebase

## @flash-cards/ui
Contains the actual React.JS application
### deps: 
- @flash-cards/models
- @flash-cards/repositories
- @flash-cards/services

