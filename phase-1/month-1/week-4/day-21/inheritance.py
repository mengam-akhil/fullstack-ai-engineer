class User:
    """Represent a general user."""

    def __init__(self, name, email):
        """Initialize a user with a name and email."""
        self.name = name
        self.email = email

    def introduce(self):
        """Display the user's basic information."""
        print("Name:", self.name)
        print("Email:", self.email)


class AdminUser(User):
    """Represent a user with administrative privileges."""

    def access_admin_panel(self):
        """Display an administrative access message."""
        print(self.name, "has access to the admin panel.")


class RegularUser(User):
    """Represent a standard user."""

    def view_profile(self):
        """Display the user's profile access."""
        print(self.name, "can view the profile.")


admin = AdminUser("Akhil", "akhil@example.com")
user = RegularUser("John", "john@example.com")

admin.introduce()
admin.access_admin_panel()

print()

user.introduce()
user.view_profile()