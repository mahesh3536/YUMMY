#include<bits/stdc++.h>
using namespace std;
int solve(int i,int j,vector<vector<int>> &v){
	if (i==0 && j==0)
	{
		return v[0][0];
	}
	else if(i==1 && j==0){
		return v[1][0];
	}
	else if(i==0 && j==1){
		return v[0][1];
	}
	else if(i<0 || j<0){
		return 0;
	}
	return v[i][j]+max(solve(i,j-1,v),max(solve(i-1,j,v),solve(i-1,j-1,v)));
}
int main(){
	int n;
	cin>>n;
	vector<vector<int>> v(n,vector<int> (n,0));
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			cin>>v[i][j];
		}
		
	}
	int p=solve(n-1,n-1,v);
	cout<<p;
}