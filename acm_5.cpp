// C++ program to print all
// permutations with duplicates allowed
#include <bits/stdc++.h>
using namespace std;


// Function to print permutations of string
// This function takes three parameters:
// 1. String
// 2. Starting index of the string
// 3. Ending index of the string.
void permute(string a, int l, int r,vector<string> &v)
{
	
	if (l == r){
		v.push_back(a);
    }   
	else
	{
		// Permutations made
		for (int i = l; i <= r; i++)
		{

			// Swapping done
			swap(a[l], a[i]);

			// Recursion called
			permute(a, l+1, r,v);

			//backtrack
			swap(a[l], a[i]);
		}
	}
}

// Driver Code
int main()
{   int k=2;

	string str = "ABC";
	int n = str.size();
    vector<string> v;
	permute(str, 0, n-1,v);
	return 0;
    cout<<v[k-1];
}

// This is code is contributed by rathbhupendra
