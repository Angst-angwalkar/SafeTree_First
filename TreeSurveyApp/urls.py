from django.urls import path
from .views import TreeSurveyView, TreeDataView

urlpatterns = [
    # path('treesurvey/', TreeSurveyView.as_view()),
    path('treedatasurvey/', TreeDataView.as_view())
]