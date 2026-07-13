# 1. Create a Class

```python
class Student:
    pass
```

---

# 2. Create an Object

```python
class Student:
    pass

student1 = Student()
student2 = Student()
```

---

# 3. Constructor (`__init__`)

```python
class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

student = Student("Mohamed", 20)

print(student.name)
print(student.age)
```

---

# 4. Instance Methods

```python
class Student:

    def __init__(self, name):
        self.name = name

    def introduce(self):
        print(f"My name is {self.name}")

student = Student("Mohamed")
student.introduce()
```

---

# 5. Update Object Attributes

```python
student.name = "Ahmed"

print(student.name)
```

---

# 6. Class Attributes

```python
class Student:

    school = "Zewail City"

    def __init__(self, name):
        self.name = name

student1 = Student("Mohamed")
student2 = Student("Ali")

print(student1.school)
print(student2.school)
```

---

# 7. Class Methods

```python
class Student:

    school = "Zewail City"

    @classmethod
    def change_school(cls, new_name):
        cls.school = new_name

Student.change_school("UST")

print(Student.school)
```

---

# 8. Static Methods

```python
class Math:

    @staticmethod
    def add(a, b):
        return a + b

print(Math.add(5, 3))
```

---

# 9. Inheritance

```python
class Person:

    def __init__(self, name):
        self.name = name


class Student(Person):
    pass

student = Student("Mohamed")

print(student.name)
```

---

# 10. `super()`

```python
class Person:

    def __init__(self, name):
        self.name = name


class Student(Person):

    def __init__(self, name, major):
        super().__init__(name)
        self.major = major

student = Student("Mohamed", "AI")

print(student.name)
print(student.major)
```

---

# 11. Method Overriding

```python
class Person:

    def introduce(self):
        print("I am a person")


class Student(Person):

    def introduce(self):
        print("I am a student")

student = Student()
student.introduce()
```

---

# 12. Encapsulation (Private Attributes)

```python
class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

account = BankAccount(1000)
```

---

# 13. Getters and Setters (`@property`)

```python
class Student:

    def __init__(self):
        self.__age = 20

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, value):
        self.__age = value

student = Student()

print(student.age)

student.age = 25

print(student.age)
```

---

# 14. Polymorphism

```python
class Dog:

    def speak(self):
        print("Woof")


class Cat:

    def speak(self):
        print("Meow")


def make_sound(animal):
    animal.speak()

make_sound(Dog())
make_sound(Cat())
```

---

# 15. Abstraction

```python
from abc import ABC, abstractmethod

class Shape(ABC):

    @abstractmethod
    def area(self):
        pass


class Square(Shape):

    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side ** 2

square = Square(5)

print(square.area())
```

---

# 16. `__str__()`

```python
class Student:

    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

student = Student("Mohamed")

print(student)
```

---

# 17. Simple Composition

```python
class Engine:

    def start(self):
        print("Engine Started")


class Car:

    def __init__(self):
        self.engine = Engine()

car = Car()

car.engine.start()
```

---


## Encapsulation

Hide data inside the object.

```python
self.__balance
```

---

## Inheritance

Reuse code from another class.

```python
class Student(Person):
```

---

## Polymorphism

Different objects can use the same method name.

```python
animal.speak()
```

---

## Abstraction

Hide implementation details and expose only what is necessary.

```python
@abstractmethod
```

---

# Decorators Used in OOP

```python
@classmethod
```

```python
@staticmethod
```

```python
@property
```

```python
@age.setter
```

```python
@abstractmethod
```

---

# Keywords You Should Know

```python
class
```

```python
self
```

```python
cls
```

```python
pass
```

```python
super()
```

```python
return
```

```python
__init__()
```

```python
__str__()
```

---
