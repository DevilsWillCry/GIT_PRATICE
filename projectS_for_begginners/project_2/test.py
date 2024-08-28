from typing import Dict, List
'''
En versiones anteriores a Python 3.9.
La notación de tipo como list[int], dict[str,int] no estaba disponible.
Es por eso que se opto por usar el modulo typing de Python.
'''
a:int = 10
b:List[int] = []
c:Dict[str,int] = {"Hola":1, "Adios":2}
print(c.popitem())
print(c)