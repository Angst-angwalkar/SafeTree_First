from django.utils.encoding import smart_text
from rest_framework import serializers
from blog.models import Post
from bson import ObjectId
from bson.errors import InvalidId

        
""" This Particular class is used to process ObjectId from Mongo to be
serialized into int, so that it can be used by DjangoRestFramework """
class ObjectIdField(serializers.Field):
    """ Serializers field for Djongo ObjectID fields """
    def to_internal_value(self, data):
        # Serialized value -> Database value
        try:
            return ObjectId(str(data)) # Get the ID, then build an ObjectID
        except InvalidId:
            raise serializers.ValidationError(
                '\'{}\' is not a valid ObjectID'.format(data)
            )

    def to_representation(self, value):
        # Database value -> Serialized Value
        if not ObjectId.is_valid(value):
            raise InvalidId
        return smart_text(value)

class PostSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'excerpt', 'content', 'status')
