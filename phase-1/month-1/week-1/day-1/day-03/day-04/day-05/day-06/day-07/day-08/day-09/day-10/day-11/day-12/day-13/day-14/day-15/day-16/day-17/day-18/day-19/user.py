class User:
    """Represent a user with basic profile information."""

    def __init__(self, name, age):
        """Initialize a user with a name and age."""
        self.name = name
        self.age = age


user1 = User("Akhil", 27)
user2 = User("John", 30)

print("User 1:", user1.name, user1.age)
print("User 2:", user2.name, user2.age)

user1.age = 28

print("Updated User 1 age:", user1.age)
print("User 2 age:", user2.age)