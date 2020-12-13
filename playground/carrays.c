#include <stdio.h>
# define N 5

int my_array[] = {1,23,17,4,-5,100};
int *ptr;

void swap (int*a, int*b){
int temp = *a;
*a = *b;
*b = temp; 
printf("after swap [%d] = %d \n", *a , *b );
}

int main(void)
{ 
    int i;
    ptr = &my_array[0];/* point our pointer to the first element of the array */
    printf("\n\n");

    for (i = 0; i < 4; i++)
    {
        printf("my_array[%d] = %d ", i , my_array[i] );
        printf("\t ptr + %d = %d\n", i , *(ptr + i) );
    }

    int ii, j;
    int Arr[N]={1,2,3,4,5};
    for (ii=0; ii < N/2 ; ii++)
    {
        swap(&Arr[ii], &Arr[(N-1)-ii]);
        // swap(Arr+ii, Arr+(N-1)–ii);
    }

    int x=4;
    int *y= &x;
    int *z[4]={NULL,NULL,NULL,NULL};
    int a[4]={1,2,3,4};
    z[0] = a;
    z[1] = a+1;
    z[2] = a+2;
    z[3] = a+3;

    for(x=0;x<4;x++)
    printf("\n%d---%d", a[x], *z[x]);
        return 0;
}