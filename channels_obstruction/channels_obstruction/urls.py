from django.conf.urls import url, include
from django.contrib import admin
from game.views import *
from rest_framework.routers import DefaultRouter


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^register/', CreateUserView.as_view()),
    url(r'^login/$', 'django.contrib.auth.views.login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': '/'}),
    url(r'^game/(?P<game_id>\d+)/$', GameView.as_view()),
    url(r'^lobby/$', LobbyView.as_view()),

    url(r'^$', HomeView.as_view()),

]

# urls for api - django rest framework
urlpatterns += [
    url(r'^game-from-id/(?P<game_id>\d+)/$', SingleGameViewSet.as_view()),
    url(r'^current-user/', CurrentUserView.as_view()),
    url(r'^claim-square/', ClaimSquareView.as_view()),
    
]
router = DefaultRouter()
router.register(r'player-games', PlayerGameViewSet, 'player_games')
router.register(r'available-games', AvailableGameViewSet, 'available_games')
router.register(r'game-squares', GameSquaresViewSet, 'game_squares')
urlpatterns += router.urls