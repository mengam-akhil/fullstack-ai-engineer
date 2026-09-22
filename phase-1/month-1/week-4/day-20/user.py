class User:
    """Represent a user with profile and account state."""

    def __init__(self, name, email, age):
        """Initialize a user with profile information."""
        self.name = name
        self.email = email
        self.age = age
        self.is_active = True

    def introduce(self):
        """Display the user's basic information."""
        print("Name:", self.name)
        print("Email:", self.email)
        print("Age:", self.age)

    def celebrate_birthday(self):
        """Increase the user's age by one year."""
        self.age += 1

    def deactivate(self):
        """Deactivate the user."""
        self.is_active = False

    def activate(self):
        """Activate the user."""
        self.is_active = True


user1 = User("Akhil", "akhil@example.com", 27)

user1.introduce()

print("Active:", user1.is_active)

user1.celebrate_birthday()
print("New age:", user1.age)

user1.deactivate()
print("Active:", user1.is_active)

user1.activate()
print("Active:", user1.is_active)

user2 = User("John", "john@example.com", 30)

user1.celebrate_birthday()

print("User 1 age:", user1.age)
print("User 2 age:", user2.age)