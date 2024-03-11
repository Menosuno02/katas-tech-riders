# CONVERSION A OCTAL Y HEXADECIMAL
# Alejandro Lopez Labajo


def decimalToOctAndHex():
    number = int(input("Introduce numero decimal: "))
    octal = ""
    hexal = ""
    equivoctal = "01234567"
    equivhexal = "0123456789ABCDEF"

    pivot = number
    # OCTAL, BASE 8
    while pivot > 0:
        octal = equivoctal[pivot % 8] + octal
        pivot //= 8
    if octal == "":
        octal = "0"

    pivot = number
    # HEXADECIMAL, BASE 16
    while pivot > 0:
        hexal = equivhexal[pivot % 16] + hexal
        pivot //= 16
    if hexal == "":
        hexal = "0"
    print("Octal: " + octal + "\nHexadecimal: " + hexal)


def rgbToHex():
    red = int(input("Introduce rojo: "))
    green = int(input("Introduce verde: "))
    blue = int(input("Introduce azul: "))
    hexal = ""
    equivhexal = "0123456789ABCDEF"

    if red == 0:
        hexal += "00"
    else:
        hexal += equivhexal[red // 16] + equivhexal[red % 16]

    if green == 0:
        hexal += "00"
    else:
        hexal += equivhexal[green // 16] + equivhexal[green % 16]

    if blue == 0:
        hexal += "00"
    else:
        hexal += equivhexal[blue // 16] + equivhexal[blue % 16]

    print("HEX: #" + hexal)


decimalToOctAndHex()
rgbToHex()
