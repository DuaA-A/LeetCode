class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> ans;
        vector<int> ds;
        f(0,target,candidates, ds,ans );
        return ans;
    }
    void f(int i, int t, vector<int>& arr, vector<int>& ds, vector<vector<int>>& ans){
        if(arr.size()==i){
            if(t==0)
                ans.push_back(ds);
            return;
        }

        if(arr[i]<=t){
            ds.push_back(arr[i]);
            f(i, t-arr[i], arr, ds, ans);
            ds.pop_back();
        }
        f(i+1, t, arr, ds, ans);
    }
};