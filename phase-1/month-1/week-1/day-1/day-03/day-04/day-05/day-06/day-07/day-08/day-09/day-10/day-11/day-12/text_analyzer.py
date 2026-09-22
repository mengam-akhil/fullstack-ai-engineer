text = """
Python is a powerful programming language. Python is used for
backend development, automation, data analysis, and artificial
intelligence. Learning Python requires practice. Practice helps
developers understand programming concepts and build better
software.
"""

text = text.lower()

punctuation = ".,!?;:"

for character in punctuation:
   text = text.replace(character, "")

words = text.split()

word_count = {}

for word in words:
  if word in word_count:
     word_count[word] = word_count[word] + 1
  else:
     word_count[word] = 1
print("Word Frequency:")

for word, count in word_count.items():
   print(word, ":", count)