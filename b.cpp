#include <iostream>

using namespace std;

int main()
{
    for(nt i=4;i>=0;i--){
        for(int j=0;j<=i+1;j++){
            cout<<"* ";
        }
        cout<<endl;
    }

    return 0;
}