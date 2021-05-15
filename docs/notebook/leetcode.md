# Leetcode

## 回溯问题

经典回答：

给定一个不含重复数字的数组 `nums` ，返回其 **所有可能的全排列** 。你可以 **按任意顺序** 返回答案。

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  // 1. 设置结果集
  const result = [];

  // 2. 回溯
  const recursion = (path, set) => {
    // 2.1 设置回溯终止条件
    if (path.length === nums.length) {
      
      // 2.1.1 推入结果集
      result.push(path.concat());

      // 2.1.2 终止递归
      return;
    }

    // 2.2 遍历数组
    for (let i = 0; i < nums.length; i++) {

      // 2.2.1 必须是不存在 set 中的坐标
      if (!set.has(i)) {

        // 2.2.2 本地递归条件（用完记得删除）
        path.push(nums[i]);
        set.add(i);

        // 2.2.3 进一步递归
        recursion(path, set);

        // 2.2.4 回溯：撤回 2.2.2 的操作
        path.pop();
        set.delete(i);
      }
    }
  };
  recursion([], new Set());

  // 3. 返回结果
  return result;
};
```



| Date      | Problem                                                      | Difficulty | Conclusion               |
| --------- | ------------------------------------------------------------ | ---------- | ------------------------ |
| 2021.5.14 | [组合综合Ⅰ](https://leetcode-cn.com/problems/combination-sum/) | 中等       | 基础                     |
| 2021.5.14 | [组合综合Ⅱ](https://leetcode-cn.com/problems/combination-sum-ii/) | 中等       | 构造递归函数时灵活一点   |
| 2021.5.14 | [全排列](https://leetcode-cn.com/problems/permutations/)     | 中等       | Set的运用不太熟练        |
| 2021.5.14 | [全排列Ⅱ](https://leetcode-cn.com/problems/permutations-ii/) | 中等       | 重点判断重复条件         |
| 2021.5.15 | [电话号码字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/submissions/) | 中等       | 字符串的直接操作还要熟悉 |

## 数组问题

| Date      | Problem                                                     | Difficulty | Conclusion                                             |
| --------- | ----------------------------------------------------------- | ---------- | ------------------------------------------------------ |
| 2021.5.15 | [螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/) | 中等       | 触发同意条件使得自动改变方向，总结核心判断条件还需锻炼 |
|           |                                                             |            |                                                        |
|           |                                                             |            |                                                        |

## 字符串问题

| Date      | Problem                                                      | Difficulty | Conclusion                      |
| --------- | ------------------------------------------------------------ | ---------- | ------------------------------- |
| 2021.5.15 | [括号生成](https://leetcode-cn.com/problems/generate-parentheses/submissions/) | 中等       | 字符串+回溯，解法很聪明，多回顾 |
|           |                                                              |            |                                 |
|           |                                                              |            |                                 |

## 树问题

| Date      | Problem                                                      | Difficulty | Conclusion |
| --------- | ------------------------------------------------------------ | ---------- | ---------- |
| 2021.5.15 | [层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/submissions/) | 中等       | 基础问题   |
|           |                                                              |            |            |
|           |                                                              |            |            |