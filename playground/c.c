#include<stdio.h>

int mydouble( int *number )
{
    *number = 2 *( *number ); 
    printf("%d\n", *number);

    return *number;
}

int cubeByReference( int *x);

int main(void) 
{
    char g= 'z';
    char c= 'a'; // *
    char*p;

    p= &c;
    printf("%c\n", *p);

    p= &g;
    printf("%c\n", *p);

    // *p='K';
    // printf("%s\n", p);

    // p='K';
    // printf("%c\n", *p);

    // printf("%s : \n", &p);

int x= 7;
mydouble(&x);
///////////////
int number = 5;
printf( "The original value of number is %d", number );

cubeByReference( &number );
printf( "\nThe new value of number is %d\n", number );

return 0;
}

int cubeByReference( int*nPtr)
{
    *nPtr= *nPtr * *nPtr * *nPtr; /* cube number in main */



    return *nPtr;
}