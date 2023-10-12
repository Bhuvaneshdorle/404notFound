#include<stdio.h>
main()
{
    int a=10;
    int b=20;
    printf("\n%d%d",a,b);
    int temp;
    temp=a;
    a=b;
    b=temp;
    printf("\n After swapping :");
    printf("%d%d",a,b)
}