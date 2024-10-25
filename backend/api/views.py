from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import Article
from .serializers import ArticleSerializer, UserSerializer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework import generics, mixins
from rest_framework import viewsets

from django.shortcuts import get_object_or_404
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User



# from django.views.decorators.csrf import csrf_exempt

# Create your views here.

'''
@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def artical_list(request):
    # get all articals
    if(request.method == 'GET'):
        queryset = Artical.objects.all()
        serializer = ArticalSerializer(queryset, many=True)

        return Response(serializer.data)
    
    elif(request.method == 'POST'):
        serializer = ArticalSerializer(data = request.data)

        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'PUT', 'DELETE'])
def artical_details(request, pk):
    try:
        artical = Artical.objects.get(pk = pk)

    except Artical.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
     
    if(request.method == "GET"):
       serializer = ArticalSerializer(artical)
       return Response(serializer.data)
    
    elif (request.method == "PUT"):
        serializer = ArticalSerializer(artical, data = request.data)

        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif (request.method == "DELETE"):
        artical.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

'''


'''
class ArticalList(APIView):
    def get(self, request):
        queryset = Artical.objects.all()
        serializer = ArticalSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ArticalSerializer(data = request.data)

        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ArticalDetails(APIView):
    def get_object(self, id):
        try:
            return Artical.objects.get(id = id)

        except Artical.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, id):
        artical = self.get_object(id)
        serializer = ArticalSerializer(artical)
        return Response(serializer.data)
    
    # def get(self, request, id):
    #     try:
    #         artical = Artical.objects.get(id = id)
    #     except:
    #         return Response(status=status.HTTP_404_NOT_FOUND)
    
    #     serializer = ArticalSerializer(artical)
    #     return Response(serializer.data)
    
    def put(self, request, id):
        artical = self.get_object(id)
        serializer = ArticalSerializer(artical, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        artical = self.get_object(id)
        artical.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''


'''

class ArticalList(generics.GenericAPIView, 
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    queryset = Artical.objects.all()
    serializer_class = ArticalSerializer

    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)
    
class ArticalDetails(generics.GenericAPIView, mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Artical.objects.all()
    serializer_class = ArticalSerializer
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id = id)
    
    def put(self, request, id):
        return self.update(request, id = id)
    
    def delete(self, request, id):
        return self.destroy(request, id=id)
    
'''

'''
class ArticalViewSet(viewsets.ViewSet):
    def list(self, request):
        articals = Artical.objects.all()
        serializer = ArticalSerializer(articals, many = True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = ArticalSerializer(data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def retrieve(self, request, pk=None):
        queryset = Artical.objects.all()
        artical = get_object_or_404(queryset, pk = pk)
        serializer = ArticalSerializer(artical)
        return Response(serializer.data)
    
    def update(self, request, pk=None):
        aritical = Artical.objects.get(pk = pk)
        serializer = ArticalSerializer(aritical, data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    
    def destroy(self, request, pk = None):
        aritical = Artical.objects.get(pk = pk)
        aritical.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''

# Generics viewset
'''
class ArticalViewSet(viewsets.GenericViewSet, 
                     mixins.ListModelMixin, 
                     mixins.CreateModelMixin,
                     mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin,
                     mixins.DestroyModelMixin):
    queryset = Artical.objects.all()
    serializer_class = ArticalSerializer
'''

# Model viewset

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]


# unauthorized user can see all products
# class ArticalList(generics.GenericAPIView, mixins.ListModelMixin):
#     queryset = Artical.objects.all()
#     serializer_class = ArticalSerializer

#     def get(self, request):
#         return self.list(request)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


