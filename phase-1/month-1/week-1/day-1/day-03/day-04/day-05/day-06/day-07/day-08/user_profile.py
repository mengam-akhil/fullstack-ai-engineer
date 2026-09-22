user = {
 "id": 101,
 "name": "Akhil",
 "age": 27,
 "email": "mengamakhilkumar@gmail.com",
 "country": "India",
 "experience": "2",
 "role": "Full Stack AI Engineer",
 "skills": [
   "Python",
   "React",
   "FastAPI",
   "Docker"
 ],
 "active": True
}


print("ID:", user["id"])
print("Name:", user["name"])
print("Age:", user["age"])
print("Email", user["email"])
print("Country", user["country"])
print("Experience", user["experience"])
print("Role:", user["role"])
print("Skills:", user["skills"])
print("First Skill:", user["skills"][0])
print("Active:", user["active"])